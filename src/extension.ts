// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as command from './commands';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "jackal-plugin" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const hello = vscode.commands.registerCommand('jackal-plugin.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hey, I am Jackal Plugin!');
	});
	context.subscriptions.push(hello);
	context.subscriptions.push(command.t200);
	context.subscriptions.push(command.ts);
	context.subscriptions.push(command.clr);
	context.subscriptions.push(command.clv);
	context.subscriptions.push(command.arph);
	context.subscriptions.push(command.amcv);
	context.subscriptions.push(command.ged);
}

// this method is called when your extension is deactivated
export function deactivate() {}
