import * as vscode from 'vscode';
import * as command from './commands';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "jackal-plugin" is now active!');
	context.subscriptions.push(command.t200);
	context.subscriptions.push(command.ts);
	context.subscriptions.push(command.clr);
	context.subscriptions.push(command.clv);
	context.subscriptions.push(command.arph);
	context.subscriptions.push(command.amcv);
	context.subscriptions.push(command.ged);
	context.subscriptions.push(command.emd);
}

export function deactivate() {}
