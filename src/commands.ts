import * as vscode from 'vscode';
import cp = require('child_process');

export const t200 = vscode.commands.registerCommand('jackal-plugin.t200', (uri: vscode.Uri) => {
    vscode.window.showInformationMessage(`We will now generate Test of HTTP:200 for this collection ${uri.fsPath}`);
    cp.exec(`dir`, (err, stdout, stderr) => {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (err) {
            console.log('error: ' + err);
        }
    });
});
export const ts = vscode.commands.registerCommand('jackal-plugin.ts', (uri: vscode.Uri) => {
});

export const clr = vscode.commands.registerCommand('jackal-plugin.clr', (uri: vscode.Uri) => {
});

export const clv = vscode.commands.registerCommand('jackal-plugin.clv', (uri: vscode.Uri) => {
});

export const arph = vscode.commands.registerCommand('jackal-plugin.arph', (uri: vscode.Uri) => {
});

export const amcv = vscode.commands.registerCommand('jackal-plugin.amcv', (uri: vscode.Uri) => {
});

export const ged = vscode.commands.registerCommand('jackal-plugin.ged', (uri: vscode.Uri) => {
});
