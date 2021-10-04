/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from 'vscode';
import jackal = require('jackal-postman');
const postmanToOpenApi = require('postman-to-openapi');

export const t200 = vscode.commands.registerCommand('jackal-plugin.t200', (uri: vscode.Uri) => {
    const executionMessage = jackal.tests200(uri.fsPath, uri.fsPath);
    vscode.window.showInformationMessage(`File updated with message: ${executionMessage}`);
});
export const ts = vscode.commands.registerCommand('jackal-plugin.ts', (uri: vscode.Uri) => {
    const executionMessage = jackal.testsSmart(uri.fsPath, uri.fsPath);
    vscode.window.showInformationMessage(`File updated with message: ${executionMessage}`);
});

export const clr = vscode.commands.registerCommand('jackal-plugin.clr', (uri: vscode.Uri) => {
    const executionMessage = jackal.cleanRequests(uri.fsPath, uri.fsPath);
    vscode.window.showInformationMessage(`File updated with message: ${JSON.stringify(Array.from(executionMessage))}`);
});

export const clv = vscode.commands.registerCommand('jackal-plugin.clv', (uri: vscode.Uri) => {
    const executionMessage = jackal.cleanVariables(uri.fsPath, uri.fsPath);
    vscode.window.showInformationMessage(`File updated with message: ${executionMessage}`);
});

export const arph = vscode.commands.registerCommand('jackal-plugin.arph', (uri: vscode.Uri) => {
    const executionMessage = jackal.appendRequestHash(uri.fsPath, uri.fsPath);
    vscode.window.showInformationMessage(`File updated with message: ${executionMessage}`);
});

export const amcv = vscode.commands.registerCommand('jackal-plugin.amcv', (uri: vscode.Uri) => {
    const executionMessage = jackal.appendMissingVariables(uri.fsPath, uri.fsPath);
    vscode.window.showInformationMessage(`File updated with message: ${executionMessage}`);
});

export const ged = vscode.commands.registerCommand('jackal-plugin.ged', (uri: vscode.Uri) => {
    const executionMessage = jackal.generateDescriptions(uri.fsPath, uri.fsPath);
    vscode.window.showInformationMessage(`File updated with message: ${executionMessage}`);
});

export const o2a = vscode.commands.registerCommand('jackal-plugin.o2a', (uri: vscode.Uri) => {
    const options: vscode.SaveDialogOptions = {
        saveLabel: 'Save as',
        filters: {
            "Yaml files": ["yml"]
        },
        title: "Save the output OpenApi file"
    };
    vscode.window.showSaveDialog(options).then(fileUri => {
        if (fileUri) {
            postmanToOpenApi(uri.fsPath, fileUri.fsPath, { defaultTag: 'General' }).then((result: string) => {
                if (result.startsWith("openapi: 3.0.0")) {
                    vscode.window.showInformationMessage(`File updated with message: OK`);
                } else {
                    vscode.window.showInformationMessage(`File updated with message: ${result}`);
                }
            })
                .catch((err: string) => {
                    vscode.window.showInformationMessage(`Error occured: ${err}`);
                });

        }
    });

});

export const emd = vscode.commands.registerCommand('jackal-plugin.emd', (uri: vscode.Uri) => {
    const options: vscode.SaveDialogOptions = {
        saveLabel: 'Save as',
        filters: {
            "Markdown files": ["md"]
        },
        title: "Save the output markdown file"
    };
    vscode.window.showSaveDialog(options).then(fileUri => {
        if (fileUri) {
            const executionMessage = jackal.exportDescriptionMD(uri.fsPath, fileUri.fsPath);
            vscode.window.showInformationMessage(`File updated with message: ${executionMessage}`);
        }
    });
});
