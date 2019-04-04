const bandMembers = require('./band');
const member = require('./members');

bandMembers.addMember(member[0]);
bandMembers.addMember(member[1]);
bandMembers.addMember(member[2]);
bandMembers.addMember(member[3]);

console.log(bandMembers.band);
