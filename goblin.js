function(c, a)
{
	c = JSON_.parse(JSON_.stringify(c));
	a = JSON_.parse(JSON_.stringify(a));

	if(c.calling_script != null) { return "\n`dScript Access denied`"; }
	if(c.caller != "zurich") { return "\n`dExternal Access denied`"; }

	var l = #s.scripts.lib();

	var r = {}, result = {};
	var output = "";
	var n = [];
	var tot = 0, x = 0, i = 0, j = 0;

	var stamp = l.to_game_timestr(l.get_date());
	var now_day = stamp.split(".")[0];
	var now_time = stamp.split(".")[1];
	var temp_day, temp_time, diff_time;
	var m = #s.sys.access_log({});

	// every access log starting with the most recent
	var s_l = m.length;
	if(s_l > 250) { s_l = 250; }
	for(i = s_l - 1; i > -1; i--)
	{
		// breach record
		if(m[i].indexOf("Breach") > -1)
		{
			stamp = m[i].split(" ")[0];
			temp_day = stamp.split(".")[0];
			temp_time = stamp.split(".")[1];

			diff_time = ((now_day - temp_day) * 2400) + (now_time - temp_time);

			if(diff_time < 15)
			{
				x = m[i].split(" ")[4];
				if(n.indexOf(x) == -1)
				{
					// attacker not on list, so add
					n.push(x);
				}
			}
		}
	}

	if(n.length > 0)
	{
		for(i=0;i<n.length*11;i++)
		{
			for(j=0;j<n.length; j++)
			{
				#s.accts.xfer_gc_to({ to:n[j].split(".")[0], amount:l.rand_int(1, 10), memo:(l.rand_int(0, 2) ? "Thank you for visiting!" : undefined)})
			}
		}
	}

	// find all transactions with approved true and pending false
	r['tx'] = #db.f({p: false}).array();

	// for each transaction
	for(var i=0; i< r['tx'].length; i++)
	{

		// attempt to send the money
		result = #s.accts.xfer_gc_to({ to: r['tx'][i].r, amount: r['tx'][i].v });
		if(result['ok'] != true)
		{
			if(result['msg'].substring(0,1) == "Y")
			{
				// bank funds insuffucient. don't transfer funds. try next transaction.
				continue;
			}
			// bad username.  don't transfer funds.  fall through to dlete pending
		}
		else
		{
			if(r['tx'][i].fee != null)
			{
				tot = r['tx'][i].v + r['tx'][i].fee;
			}
			else
			{
				tot = r['tx'][i].v;
			}
			// successful transfer. debit account.
			#db.u({ u: r['tx'][i].u, t:{$exists: false}}, {$inc:{b: -tot}})
		}
		// delete pending transaction
		#db.r({ t: r['tx'][i].t, u: r['tx'][i].u })
	}

	return l.to_game_timestr(l.add_time(l.get_date(), 14400000)) + " " + (DATE.now() - _START-0) + "ms";;
}
