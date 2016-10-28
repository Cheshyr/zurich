function(c, a)
{
	// Soron Security Recs
	//var dep = a.dep; full scriptors / functions out before flipflop
	c = JSON_.parse(JSON_.stringify(c));
	a = JSON_.parse(JSON_.stringify(a));
	// Soron Security Recs

	//No Scripts
	if(c.calling_script != null)
	{
		return "\n`dScript Access denied`";
	}

	if(c.caller != "zurich")
	{
		return "\n`dExternal Access denied`";
	}

	//var caller = c.caller;
	var l = #s.scripts.lib();

	var r = {};
	var result = {}
	var tot = 0;

	// find all transactions with approved true and pending false
	r['tx'] = #db.f({p: false}).array();

	// for each transaction
	for(var i=0; i< r['tx'].length; i++)
	{
		//if(r['tx'][i].v <= 0)
		//{
		//	#db.r({ t: r['tx'][i].t, c: r['tx'][i].c })
		//	continue;
		//}

		// attempt to send the money
		//result = #s.accts.xfer_gc_to({ to: r['tx'][i].r, amount: r['tx'][i].v, memo: "`HZurich Vault` `iwithdrawal`"});
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

	//r['txp'] = #db.f({a: false, p: false}).array();
	//for(var i=0; i< r['txp'].length; i++)
	//{
	//	if((l.get_date_utcsecs() - r['txp'][i].ts) > 86400000)
	//	{
	//		#db.r({ t: r['txp'][i].t, c: r['txp'][i].c })
	//	}
	//}

	return l.to_game_timestr(l.add_time(l.get_date(), 14400000));
}
