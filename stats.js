function(c, a)
{

		// Soron Security Recs
	//var dep = a.dep; full scriptors / functions out before flipflop
	c = JSON_.parse(JSON_.stringify(c));
	a = JSON_.parse(JSON_.stringify(a));
	// Soron Security Recs

	//var caller = c.caller;
	var l = #s.scripts.lib();

	//var tot = #db.f({u: {$exists:true}}).array().length;
	var z = #db.f({u: {$exists:true}, b: {"$gte":1}}).array();
	var tx_cnt = #db.f({data:"stats"}).first().tx_cnt;

	//var min = z[0].b;
	//var max = z[0].b;
	var sum = z[0].b;

	var cnt = z.length;

	var y = 1;
	
	for(; y < z.length; y++)
	{
		sum += z[y].b;
		//if(z[y].b < min) {min = z[y].b;}
		//if(z[y].b > max) {max = z[y].b;}
	}
	var avg = sum/cnt;

	var result = "\n`Nactive users`:      `V" + cnt + "`";
		result +="\n`Nuser transactions`: `V" + tx_cnt + "`";
		
		//result +="\n`Ntotal users`:      `V" + tot + "`";
		//result +="\n`Naverage balance`:   " + l.to_gc_str(avg) + " ";
		result +="\n`Ntotal balance`:     " + l.to_gc_str(sum) + " ";

	return result;
}
