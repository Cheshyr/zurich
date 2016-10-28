function(context, args) // cmd:"show"
{
	
	// Soron Security Recs
	//var dep = a.dep; full scriptors / functions out before flipflop
	context = JSON_.parse(JSON_.stringify(context));
	args = JSON_.parse(JSON_.stringify(args));
	// Soron Security Recs

	//No Scripts
	//if(c.calling_script != null)
	//{
	//	return "\n`dScript Access denied`";
	//}

	var caller = context.caller;
	var l = #s.scripts.lib();
	
	var results = {};
	var r = "";
	if(args.cmd == "show")
	{
		results['all'] = #db.f({}).array();
	}

	if(args.cmd == "backup")
	{
		results['backup'] = #db.f({u: {$exists:true}, b: {"$gte":1}}).array();

		for(var i = 0; i < results['backup'].length; i++ )
		{
			r += results['backup'][i].u + "\n";
			r += results['backup'][i].b + "\n\n";
		}

		return r;
	}


	//if(args.cmd == "init")
	//{
	//	#db.u({data:"stats"}, {$inc:{tx_cnt:1582}})
	//}

	if(args.cmd == "fix")
	{
		#db.u({ u: "8307376f4f15dd62f71fd10962e29944ab3b3fb64786240e5b95a77830b6f3a9" }, {$set:{b: 960000000000 }})
	}

	//if(args.cmd == "delete")
	//{
	//	if(args.confirm)
	//	{
	//		results['all'] = #db.r({});
	//	}
	//}

	//if(args.cmd == "stats")
	//{
		//results['all'] = #db.f({u: {$exists:true}, b: {"$gte":1}}).array();

	//	var z = #db.f({u: {$exists:true}, b: {"$gte":1}}).array();

	//	var min = z[0].b;
	//	var max = z[0].b;
	//	var sum = z[0].b;

	//	var cnt = z.length;

	//	var y = 1;
		
	//	for(; y < z.length; y++)
	//	{
	//		sum += z[y].b;
	//		if(z[y].b < min) {min = z[y].b;}
	//		if(z[y].b > max) {max = z[y].b;}
	//	}
	//	var avg = sum/cnt;

	//	return "\ncnt: " + cnt + " active users\navg: " + l.to_gc_str(avg) + "\nmin: " + l.to_gc_str(min) + "\nmax: " + l.to_gc_str(max) + "\nsum: " + l.to_gc_str(sum) + " ";

		//var j = results['all'].length
	//}

	//if(args.cmd == "fix_link")
	//{
	//	results['all'] = #db.f({player: {$exists:true}}).array();
	//	for(var i = 0; i < results['all'].length; i++ )
	//	{
	//		#db.u({player: results['all'][i].player},{$unset:{user:""}})
	//		var x = results['all'][i].user.length;
	//		for(var j=0;j<x;j++)
	//		{
	//			#db.u({player: results['all'][i].player},{$push:{user:l.get_date_utcsecs()}})
	//		}
			
			
			//#db.u({})

			//#db.u({ u: r['tx'][i].u, t:{$exists: false}}, {$inc:{b: -r['tx'][i].v}})
	//	}
	//	return r;
	//}

	//var x = 0;

	if(args.cmd == "clean")
	{
		//#db.r({ b: 1582 })
		//#db.u({player: "a232c18d0b72dcd17430880349a325625b7e1545fff2d0d5644cfa3bde73d4f5"},{$pull:{user:""}})
		// find caller hash
		results['log'] = #db.f({player: {$exists:true}}).array();

	// if caller hash exists
		if(results['log'] != null)
		{
			for(var z = 0; z < results['log'].length; z++)
			{
				// do they have too mnay accounts already?
				if(results['log'][z].user.length > 1)
				{
					//x++;
					//l.log(results['log']);
					#db.u({player: results['log'][z].player},{$unset:{user:""}})
					#db.u({player: results['log'][z].player},{$push:{user: l.get_date_utcsecs()}})
					//#db.u({player: results['log'][z].player},{$push:{user: l.get_date_utcsecs()}})
				}	
			}		
		}

		results['log'] = #db.f({player: {$exists:true}}).array();
	}


	//return x;
	return results;
}
