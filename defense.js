function(c, a)
{
	c = JSON_.parse(JSON_.stringify(c));
	a = JSON_.parse(JSON_.stringify(a));

	var l = #s.scripts.lib();

	var result = "";
	var n = [];
	var x, i, j;

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
		for(i=0;i<(40/n.length);i++)
		{
			for(j=0;j<n.length; j++)
			{
				#s.accts.xfer_gc_to({ to:n[j].split(".")[0], amount:l.rand_int(1, 10), memo:(l.rand_int(0, 2) ? "Thank you for visiting!" : undefined)})
			}
		}
	}
	return result + "\n" + (DATE.now() - _START-0) + "ms";
}
