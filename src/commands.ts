/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from 'vscode';
import cp = require('child_process');
import jackal = require('jackal-postman');

export const t200 = vscode.commands.registerCommand('jackal-plugin.t200', (uri: vscode.Uri) => {
    vscode.window.showInformationMessage(`Alteration started`);
    const executionMessage = jackal.tests200(uri.fsPath, uri.fsPath);
    vscode.window.showInformationMessage(`File updated with message: ${executionMessage}`);
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

export const emd = vscode.commands.registerCommand('jackal-plugin.emd', (uri: vscode.Uri) => {
    vscode.window.showInformationMessage(`Original ${uri.fsPath}`);
    const options: vscode.SaveDialogOptions = {
        saveLabel: 'Save as',
        filters: {
            "Markdown files": ["md"]
        },
        title: "Save the output markdown file"
    };
    vscode.window.showSaveDialog(options).then(fileUri => {
        if (fileUri) {
            vscode.window.showInformationMessage(`Selected ${fileUri.fsPath}`);
        }
    });
});
