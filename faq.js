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
		help +=  '`i after execution, and every core script is `FULLSEC`i! All`\n'
		help +=  '`i text data is cryptographically hashed and illegible to`\n'
		help +=  '`i our operators. Script Access is generally restricted.`\n\n'

	    help +=  '`i FAQ`\n\n'

		help +=  ' What do you actually store about me?\n\n'

		help +=  '`i  The only thing that is stored in plaintext is the withdrawal`\n'
		help +=  '`i  target, and even that is only stored until the withdrawal has`\n'
		help +=  '`i  been processed. We do not store who creates or accesses which`\n'
		help +=  '`i  account. We do not store who deposits or withdraws from accounts.`\n'
		help +=  '`i  Passwords are salted and cryptographically hashed. Even if we`\n'
		help +=  '`i  wanted to, there is no way to reconstruct any transaction`\n'
		help +=  '`i  history, your password, or your username on the MUD.`\n\n'

        help +=  ' You said I am only allowed two accounts. How do you check for that?\n\n'

		help +=  '`i  Your username on the MUD is hashed and stored alongside a timestamp`\n'
		help +=  '`i  indicating that you created an account. However, we do not store`\n'
		help +=  '`i  which account was created and the accounts themselves do not carry`\n'
		help +=  '`i  creation timestamps.`\n\n'

		help +=  ' What if another username is hashed to the same value as mine?\n\n'

		help +=  '`i  That is something we will worry about once we have tens of`\n'
		help +=  '`i  billions of users. There is currently no practical attack on`\n'
		help +=  '`i  the hashing algorithm we use.`\n\n'

		help +=  ' If I reuse a retired username from another user, is that going to be a problem?\n\n'

		help +=  '`i  Every user gets the permission to create one more ``HZurich Vault`\n'
		help +=  '`i  account every 15 days. By the time your desired username becomes`\n'
		help +=  '`i  available, it will be able to create two more accounts.`\n\n'

		help +=  ' What happens if the bank cannot cover my withdrawal?\n\n'

		help +=  '`i  We do not offer loans, so that should never be the case,`\n'
		help +=  '`i  but in that situation all pending withdrawals that can`\n'
		help +=  '`i  be filled with cash on hand will be filled, and the `\n'
		help +=  '`i  remainder will be processed when trust delivers escrow.`\n\n'

		help +=  ' How fast are withdrawals?\n\n'

		help +=  '`i  Unless we have an unusually high volume of withdrawal requests,`\n'
		help +=  '`i  it should be processed within 10 seconds. If there is a specific`\n'
		help +=  '`i  balance you will want to withdraw regularly, we recommend setting`\n'
		help +=  '`i  up a macro for that. Do not forget you can add` confirm:true `ito`\n'
		help +=  '`i  remove the confirmation step.`\n\n';

		help +=  ' This cannot all be free. Where is your cut?\n\n'

		help +=  '`i  We have future features planned such as anonymous deposit`\n'
		help +=  '`i  and withdrawal tokens, and emergency retainer services,`\n'
		help +=  '`i  for which we will charge a fee. Basic services are free.`\n\n\n'

		help +=  '`I Our security experts discourage calling other users\' public scripts during`\n'
		help +=  '`I hardline. This includes, but is in no way limited to Zurich scripts.`\n\n'

		help +=  ' Do not forget to review the command list at zurich.help.\n\n'
		
		help +=  '`i Thank you for considering ``HZurich Vault``i! We hope to see you soon.`\n\n'

	return help;
}


