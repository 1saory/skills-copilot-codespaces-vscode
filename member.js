function skillsMember() {
  return {
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB'],
    getSkills: function() {
      return this.skills;
    },
    addSkill: function(skill) {
      this.skills.push(skill);
      return this.skills;
    },
    removeSkill: function(skill) {
      this.skills = this.skills.filter(s => s !== skill);
      return this.skills;
    }
  };
}