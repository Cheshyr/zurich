function(c, a)
{

	// Soron Security Recs
	//var dep = a.dep; full scriptors / functions out before flipflop
	c = JSON_.parse(JSON_.stringify(c));
	a = JSON_.parse(JSON_.stringify(a));
	// Soron Security Recs

	//No Scripts
	//if(c.calling_script != null)
	//{
	//	return "\n`dScript Access denied`";
	//}

	// No arguments
	var help = '\n`i Welcome to the` `HZurich Vault`!\n\n'
		help +=  '`i Security and Privacy are paramount concerns for you, so`\n'
		help +=  '`i they are also a priority for us! Accounts are anonymous`\n'
		help +=  '`i and accessible from any username, transactions are purged`\n'
		help +=  '`i after execution, and every Core script is `FULLSEC`i! All`\n'
		help +=  '`i text data is cryptographically hashed and illegible to`\n'
		help +=  '`i our operators. Script Access is generally restricted.`\n\n'

		help +=  '`i Commands:`\n\n'

		help +=  ' zurich.account { req:"", usr:"", pwd:"" }\n\n'

		help +=  '  FULLSEC   FREE   SCRIPTABLE\n'
		help +=  '`i  This script manages your account. You can create new`\n'
		help +=  '`i  users, check your balance, and see pending withdrawals.`\n'
		help +=  '`i  Note that only 2 accounts are permitted per username.`\n'
		help +=  '`i  Permitted ``Nreq`:`i are ``V"create"``i, ``V"balance"``i, and ``V"pending"``i.`\n\n'

		help +=  ' zurich.deposit { usr:"", pwd:"", amt:"" }\n\n'
		
		help +=  '  FULLSEC   FREE   SCRIPTABLE\n'
		help +=  '`i  This script adds funds to your balance through escrow.`\n'
		help +=  '`i  This is a 3 step process for any new deposit value.`\n'
		help +=  '`i  The first execution generates the escrow request.`\n'
		help +=  '`i  The next step is to confirm the escrow transfer.`\n'
		help +=  '`i  Complete the deposit by running the first step again.`\n\n'

		help +=  ' zurich.withdraw { usr:"", pwd:"", tgt:"", amt:"" }\n\n'

		help +=  '  FULLSEC   FREE / `l3% FEE`   SCRIPTABLE\n'
		help +=  '`i  This script transfers funds from your account to the`\n'
		help +=  '`i  user specified by the ``Ntgt`:`i parameter. You will be`\n'
		help +=  '`i  asked to confirm the withdrawal, after which it is`\n'
		help +=  '`i  batched for execution. Transfer is usually quick.`\n'
		help +=  '`i  Scripted withdrawls over `10KGC`i are charged a fee.`\n'
		help +=  '`i  Manual withdrawals of any value remain free.`\n\n'

		help +=  ' zurich.cashdump{ usr:"", pwd:"", amt:"" }\n\n'
		help +=  '  `xMIDSEC`   `l2% FEE`   SCRIPTABLE\n'
		help +=  '`i  This feature allows rapid deposits to your account`\n'
		help +=  '`i  from a script, with no intermediate steps.  There is`\n'
		help +=  '`i  a confirmation step, but you may include` confirm:true\n'
		help +=  '`i  in the initial call to bypass it.  We charge a small`\n'
		help +=  '`i  fee for cashdumps over `10KGC`i, which is deducted`\n'
		help +=  '`i  from the deposit amount.`\n\n'

		help +=  '`i Quick FAQ:`\n\n'

		help +=  ' I confirmed the escrow payment on zurich.deposit; why is\n'
		help +=  ' there no money in my account?\n\n'

		help +=  '`i  After confirming the escrow, you need to resubmit the`\n'
		help +=  '`i  deposit for it to process. Future transactions for the`\n'
		help +=  '`i  same value will not require escrow confirmation.`\n\n'

		help +=  ' Can I withdraw money in one step?\n\n'

		help +=  '`i  Yes, absolutely. You can add` confirm:true`i to the`\n'
		help +=  '`i  arguments on the first call, making the withdrawal `\n'
		help +=  '`i  process single-step.  Be aware, though, that if you`\n'
		help +=  '`i  mistype the target user, Zurich can not help you`\n'
		help +=  '`i  retrieve that money.`\n\n\n'

		help +=  '`I Our security experts discourage calling other users\' public scripts during`\n'
		help +=  '`I hardline. This includes, but is in no way limited to Zurich scripts.`\n\n'

		help +=  ' More details available in the Full FAQ at zurich.faq.\n\n'

		help +=  '`i Thank you for considering ``HZurich Vault``i! We hope to see you soon.`\n\n'

	return help;
}
