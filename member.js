function skillsMember() {
    this.skills = [];
    this.addSkill = function(skill) {
        this.skills.push(skill);
    };
    this.removeSkill = function(skill) {
        var index = this.skills.indexOf(skill);
        if (index > -1) {
            this.skills.splice(index, 1);
        }
    };
    this.showSkills = function() {
        this.skills.forEach(function(skill) {
            console.log(skill);
        });
    };
}