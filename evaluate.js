const evaluateChecklist = (data, rules) => {
    return rules.map((rule) => ({
      id: rule.id,
      description: rule.description,
      passed: rule.evaluate(data),
    }));
  };
  
  module.exports = evaluateChecklist;
  