'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


function safeString(str) {
	return str.replace(/\W+/g, "");
}

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the splendid ' + chalk.red('generator-dux') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is your components\'s name?',
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
	  
	var compName = safeString(this.props.name);
	  
	//Actions
    this.fs.copy(
      this.templatePath('actions.js' ),
      this.destinationPath( compName + '/actions.js')
    );
	
	//ActionTypes
    this.fs.copyTpl(
      this.templatePath('actionTypes.js'),
		this.destinationPath( compName +'/actionTypes.js'), {
			compName: compName
		}
    );
	
	//Constants
    this.fs.copyTpl(
      this.templatePath('constants.js'),
		this.destinationPath( compName + '/constants.js'), {
			compName: compName
		}
    );
	
	//Model
    this.fs.copyTpl(
      this.templatePath('model.js'),
		this.destinationPath( compName + '/model.js'), {
			compName: compName
		}
    );
	
	//Reducer
    this.fs.copy(
      this.templatePath('reducer.js'),
		this.destinationPath( compName + '/reducer.js')
    );
	
	//App Index
    this.fs.copy(
      this.templatePath('index.js'),
		this.destinationPath( compName + '/index.js')
    );
	
	//App
    this.fs.copyTpl(
      this.templatePath('compName.js'),
		this.destinationPath( compName+ "/" + compName + '.js' ), {
			compName: compName
		}
    );
	
	//Component Index
    this.fs.copyTpl(
      this.templatePath('components/index.js'),
		this.destinationPath( compName + '/components/index.js'), {
			compName: safeString( compName + "Component" )
		}
    );
	
	//Component
    this.fs.copyTpl(
      this.templatePath('components/CompNameComponent.js'),
		this.destinationPath( compName + '/components/' + compName + 'Component.js'), {
			compName: safeString( compName + "Component" )
		}
    );
	
  },

  install: function () {
    // this.installDependencies();
  }
});
