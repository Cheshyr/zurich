function(c, a) // usr:"", pwd:"", tgt:"", amt:""
{

	// Soron Security Recs
	//var dep = a.dep; full scriptors / functions out before flipflop
	c = JSON_.parse(JSON_.stringify(c));
	a = JSON_.parse(JSON_.stringify(a));
	// Soron Security Recs
	var script_access = (c.calling_script != null);
	//No Scripts
	//if(c.calling_script != null)
	//{
	//	return "\n`dScript Access denied`";
	//}

	// No arguments
	var welcome = '\n`HZurich Vault` `iWithdrawal Request`\n\n`iRequests are batched for future processing`\n`iRecords purged after transaction complete`\n\n`isyntax:` zurich.withdraw { usr:"", pwd:"", tgt:"", amt:"" }\n\n`iFor questions, please see `zurich.help';
	if(!a) { return welcome;}

	var l = #s.scripts.lib();
	
	// *** SHA-2 256
	var sha = {};
	sha.R = function(n, x) 
	{
	    return (x >>> n) | (x << (32-n));
	};

	sha.S0  = function(x) { return sha.R(2,  x) ^ sha.R(13, x) ^ sha.R(22, x); };
	sha.S1  = function(x) { return sha.R(6,  x) ^ sha.R(11, x) ^ sha.R(25, x); };
	sha.s0  = function(x) { return sha.R(7,  x) ^ sha.R(18, x) ^ (x>>>3);  };
	sha.s1  = function(x) { return sha.R(17, x) ^ sha.R(19, x) ^ (x>>>10); };
	sha.Ch  = function(x, y, z) { return (x & y) ^ (~x & z); };
	sha.Maj = function(x, y, z) { return (x & y) ^ (x & z) ^ (y & z); };

	sha.HS = function(n) 
	{
		var sha='', v;
		for (var i=7; i>=0; i--) { v = (n>>>(i*4)) & 0xf; sha += v.toString(16); }
		return sha;
	};

	sha.ha = function(m) 
	{
		var i,j,k,t;

		for(k=0;k<4096;k++)
		{

		var K = [
			0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
			0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
			0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
			0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
			0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
			0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
			0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
			0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2 ];

		var H = [
			0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19 ];

			m += STRING.fromCharCode(0x80); 

			var l = m.length/4 + 2;
			var N = MATH.ceil(l/16);
			var M = new ARRAY(N);

			for (i=0; i<N; i++) 
			{
				M[i] = new ARRAY(16);
				for (j=0; j<16; j++) 
				{
					M[i][j] = (m.charCodeAt(i*64+j*4)<<24) | (m.charCodeAt(i*64+j*4+1)<<16) |
					(m.charCodeAt(i*64+j*4+2)<<8) | (m.charCodeAt(i*64+j*4+3));
				}
			}

			M[N-1][14] = ((m.length-1)*8) / MATH.pow(2, 32); M[N-1][14] = MATH.floor(M[N-1][14]);
			M[N-1][15] = ((m.length-1)*8) & 0xffffffff;

			var W = new ARRAY(64); var a, b, c, d, e, f, g, h;
			for (i=0; i<N; i++) 
			{
				for (t=0;  t<16; t++) W[t] = M[i][t];
				for (t=16; t<64; t++) W[t] = (sha.s1(W[t-2]) + W[t-7] + sha.s0(W[t-15]) + W[t-16]) & 0xffffffff;

				a = H[0]; b = H[1]; c = H[2]; d = H[3]; e = H[4]; f = H[5]; g = H[6]; h = H[7];

				for (t=0; t<64; t++) 
				{
					var T1 = h + sha.S1(e) + sha.Ch(e, f, g) + K[t] + W[t];
					var T2 =     sha.S0(a) + sha.Maj(a, b, c);
					h = g;
					g = f;
					f = e;
					e = (d + T1) & 0xffffffff;
					d = c;
					c = b;
					b = a;
					a = (T1 + T2) & 0xffffffff;
				}

				H[0] = (H[0]+a) & 0xffffffff;
				H[1] = (H[1]+b) & 0xffffffff;
				H[2] = (H[2]+c) & 0xffffffff;
				H[3] = (H[3]+d) & 0xffffffff;
				H[4] = (H[4]+e) & 0xffffffff;
				H[5] = (H[5]+f) & 0xffffffff;
				H[6] = (H[6]+g) & 0xffffffff;
				H[7] = (H[7]+h) & 0xffffffff;
			}

			m = sha.HS(H[0]) + sha.HS(H[1]) + sha.HS(H[2]) + sha.HS(H[3]) +
			sha.HS(H[4]) + sha.HS(H[5]) + sha.HS(H[6]) + sha.HS(H[7]);
		}
		return m;
	}
	// *************

	// generate salt
	function salt()
	{
		return  l.rand_int(0, 2147483647).toString(16) + 
				l.rand_int(0, 2147483647).toString(16) + 
				l.rand_int(0, 2147483647).toString(16) + 
				l.rand_int(0, 2147483647).toString(16);
	}

	// Fixed Time STRING Compare
	function eq(x,y)	
	{
		var d = x.length ^ y.length;
		for(var i = 0; i < x.length && i < y.length; i++) d |= x[i] ^ y[i];	
		return d == 0;
	}
	// *************

	var r = {};
	var u, s, p, c, t;

	var result = {};

	// missing usr or pwd
	if((!a.usr) || (!a.pwd))
	{
		return welcome;
	}

	// hash provided username
	u = sha.ha(a.usr);

	// retreive user records
	r['usr'] = #db.f({u: u}).first();
	if(r['usr'] != null)
	{
		// retreive salt
		s = r['usr'].s;

		// hash provided password
		p = sha.ha( s + a.pwd)

		// password hashes match?
		if(eq(r['usr'].p,p))
		{	

			// scan existsing pending transactions, add up the total,
			// subtract this value from users current balance to determine available balance
			var pending = 0;
			r['pending'] = #db.f({u: u, t: {$exists: true}}).array();
			if(r['pending'] != null)
			{
				for(var i=0; i<r['pending'].length; i++)
				{
					pending += r['pending'][i].v;
				}
			}

			// if creating request
			if((a.tgt) && (a.amt))
			{
				// convert a.amt to a local integer
				var val;
				// if amt is a string, convert it to an integer
				if(l.is_str(a.amt))
				{
					val = l.to_gc_num(a.amt);
					if(!l.is_num(val))
					{
						return val;
					}
				}
				else
				{
					val = a.amt;
				}

				if(val <= 0)
				{
					return "\n`drequest failed`";
				}

				var fee = 0;
				if(script_access)
				{
					if(val >= 10000)
					{
						fee = MATH.floor(val * 0.03);
					}
				}
				
				// check user account to see if balance exceeded
				if(r['usr'].b - pending >= val)
				{

					if(a.confirm)
					{
						// create transaction id
						//t = sha.ha( salt() ).substring(0,8);
						t = l.get_date_utcsecs()
						// create a confirmation token
						//c = sha.ha( salt() ).substring(0,8);

						if(script_access)
						{
							#db.i({t: t, u: u, r: a.tgt, v: val, fee: fee, p: false });
							#db.u({data:"stats"}, {$inc:{tx_cnt:1}})
							//#s.chats.tell({to:"zurich", msg:"ZURWP:" + l.get_date_utcsecs()})
							return '\n`iRequest confirmed. `' + l.to_gc_str(val) + '`i will be withdrawn to` ' + a.tgt + '`i with Script Access Fee of `' + l.to_gc_str(fee) + "`i applied to account.`";
						}
						#db.i({t: t, u: u, r: a.tgt, v: val, fee: fee, p: false });
						#db.u({data:"stats"}, {$inc:{tx_cnt:1}})
						//#s.chats.tell({to:"zurich", msg:"ZURWP:" + l.get_date_utcsecs()})
						return '\n`iRequest confirmed. `' + l.to_gc_str(val) + '`i will be withdrawn to` ' + a.tgt + "`i.`";
					}
					else
					{
						if(script_access)
						{
							return '\n`iPlease confirm: `' + l.to_gc_str(val) + '`i will be withdrawn to` ' + a.tgt + '`i with Script Access Fee of `' + l.to_gc_str(fee) + '`i. Confirm with` confirm:true';
						}
						return '\n`iPlease confirm: `' + l.to_gc_str(val) + '`i will be withdrawn to` ' + a.tgt + '`i. Confirm with` confirm:true';
					}
				}
				// TODO: add current balance and pending withdrawals summary
				if(script_access)
				{
					return '\n`dbalance insufficient`\n\n`i Balance: `' + l.to_gc_str(r['usr'].b) + '\n`i Pending Withdrawals: `' + l.to_gc_str(pending) + '\n`i Withdrawal Value + Script Access Fee: `' + l.to_gc_str(withdraw_val) + " ";
				}
				return '\n`dbalance insufficient`\n\n`i Balance: `' + l.to_gc_str(r['usr'].b) + '\n`i Pending Withdrawals: `' + l.to_gc_str(pending)  + '\n`i Withdrawal Value: `' + l.to_gc_str(val) + " ";
			}
		}
	}
	return "\n`drequest failed`";
}