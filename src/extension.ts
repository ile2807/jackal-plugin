// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import cp = require('child_process');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "jackal-plugin" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let hello = vscode.commands.registerCommand('jackal-plugin.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hey, I am Jackal Plugin!');
	});
	context.subscriptions.push(hello);
	let tests200  = vscode.commands.registerCommand('jackal-plugin.t200', (uri:vscode.Uri) => {
		vscode.window.showInformationMessage(`We will now generate Test of HTTP:200 for this collection ${uri.fsPath}`);
		cp.exec(`dir`, (err, stdout, stderr) => {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			if (err) {
				console.log('error: ' + err);
			}
		});
	});
	context.subscriptions.push(tests200);

}

// this method is called when your extension is deactivated
export function deactivate() {}
