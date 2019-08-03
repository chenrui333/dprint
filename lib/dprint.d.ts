/**
 * Formats the provided text with the specified configuration.
 * @param filePath - File path of the text.
 * @param fileText - Text to format.
 * @param configuration - Configuration to use for formatting.
 */
export declare function formatFileText(filePath: string, fileText: string, configuration: ResolvedConfiguration): string;

/**
 * User specified configuration.
 */
export interface Configuration {
    /**
     * The width of a line the printer will try to stay under. Note that the printer may exceed this width in certain cases.
     * @default 120
     */
    lineWidth?: number;
    /**
     * The number of spaces for an indent. This option is ignored when using tabs.
     * @default 4
     */
    indentWidth?: number;
    /**
     * Whether to use tabs (true) or spaces (false).
     * @default false
     */
    useTabs?: boolean;
    /**
     * Whether statements should use semi-colons.
     * @default true
     */
    semiColons?: boolean;
    /**
     * Whether to use single quotes (true) or double quotes (false).
     * @default false
     */
    singleQuotes?: boolean;
    /**
     * The kind of newline to use.
     * @default "auto"
     * @value "auto" - For each file, uses the newline kind found at the end of the last line.
     * @value "crlf" - Uses carriage return, line feed.
     * @value "lf" - Uses line feed.
     * @value "system" - Uses the system standard (ex. crlf on Windows).
     */
    newlineKind?: "auto" | "crlf" | "lf" | "system";
    /**
     * If braces should be used or not.
     * @default "maintain"
     * @value "maintain" - Uses braces if they're used. Doesn't use braces if they're not used.
     * @value "always" - Forces the use of braces. Will add them if they aren't used.
     * @value "preferNone" - Forces no braces when when the header is one line and body is one line. Otherwise forces braces.
     */
    useBraces?: "maintain" | "always" | "preferNone";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    bracePosition?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the next control flow within a control flow statement.
     * @default "nextLine"
     * @value "maintain" - Maintains the next control flow being on the next line or the same line.
     * @value "sameLine" - Forces the next control flow to be on the same line.
     * @value "nextLine" - Forces the next control flow to be on the next line.
     */
    nextControlFlowPosition?: "maintain" | "sameLine" | "nextLine";
    /**
     * If trailing commas should be used.
     * @default "never"
     * @value "never" - Trailing commas should not be used.
     * @value "always" - Trailing commas should always be used.
     * @value "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
     */
    trailingCommas?: "never" | "always" | "onlyMultiLine";
    /**
     * The width of a line the printer will try to stay under. Note that the printer may exceed this width in certain cases.
     * @default 120
     */
    "typescript.lineWidth"?: number;
    /**
     * The width of a line the printer will try to stay under. Note that the printer may exceed this width in certain cases.
     * @default 120
     */
    "json.lineWidth"?: number;
    /**
     * The number of spaces for an indent. This option is ignored when using tabs.
     * @default 4
     */
    "typescript.indentWidth"?: number;
    /**
     * The number of spaces for an indent. This option is ignored when using tabs.
     * @default 4
     */
    "json.indentWidth"?: number;
    /**
     * Whether to use tabs (true) or spaces (false).
     * @default false
     */
    "typescript.useTabs"?: boolean;
    /**
     * Whether to use tabs (true) or spaces (false).
     * @default false
     */
    "json.useTabs"?: boolean;
    /**
     * How to space the members of an enum.
     * @default "newline"
     * @value "newline" - Forces a new line between members.
     * @value "blankline" - Forces a blank line between members.
     * @value "maintain" - Maintains whether a newline or blankline is used.
     */
    "enumDeclaration.memberSpacing"?: "newline" | "blankline" | "maintain";
    "breakStatement.semiColon"?: boolean;
    "callSignature.semiColon"?: boolean;
    "classMethod.semiColon"?: boolean;
    "classProperty.semiColon"?: boolean;
    "constructSignature.semiColon"?: boolean;
    "continueStatement.semiColon"?: boolean;
    "debuggerStatement.semiColon"?: boolean;
    "directive.semiColon"?: boolean;
    "doWhileStatement.semiColon"?: boolean;
    "exportAssignment.semiColon"?: boolean;
    "expressionStatement.semiColon"?: boolean;
    "functionDeclaration.semiColon"?: boolean;
    "ifStatement.semiColon"?: boolean;
    "importDeclaration.semiColon"?: boolean;
    "importEqualsDeclaration.semiColon"?: boolean;
    "indexSignature.semiColon"?: boolean;
    "mappedType.semiColon"?: boolean;
    "methodSignature.semiColon"?: boolean;
    "moduleDeclaration.semiColon"?: boolean;
    "namespaceExportDeclaration.semiColon"?: boolean;
    "propertySignature.semiColon"?: boolean;
    "returnStatement.semiColon"?: boolean;
    "throwStatement.semiColon"?: boolean;
    "typeAlias.semiColon"?: boolean;
    "variableStatement.semiColon"?: boolean;
    /**
     * If braces should be used or not.
     * @default "maintain"
     * @value "maintain" - Uses braces if they're used. Doesn't use braces if they're not used.
     * @value "always" - Forces the use of braces. Will add them if they aren't used.
     * @value "preferNone" - Forces no braces when when the header is one line and body is one line. Otherwise forces braces.
     */
    "forInStatement.useBraces"?: "maintain" | "always" | "preferNone";
    /**
     * If braces should be used or not.
     * @default "maintain"
     * @value "maintain" - Uses braces if they're used. Doesn't use braces if they're not used.
     * @value "always" - Forces the use of braces. Will add them if they aren't used.
     * @value "preferNone" - Forces no braces when when the header is one line and body is one line. Otherwise forces braces.
     */
    "forOfStatement.useBraces"?: "maintain" | "always" | "preferNone";
    /**
     * If braces should be used or not.
     * @default "maintain"
     * @value "maintain" - Uses braces if they're used. Doesn't use braces if they're not used.
     * @value "always" - Forces the use of braces. Will add them if they aren't used.
     * @value "preferNone" - Forces no braces when when the header is one line and body is one line. Otherwise forces braces.
     */
    "forStatement.useBraces"?: "maintain" | "always" | "preferNone";
    /**
     * If braces should be used or not.
     * @default "maintain"
     * @value "maintain" - Uses braces if they're used. Doesn't use braces if they're not used.
     * @value "always" - Forces the use of braces. Will add them if they aren't used.
     * @value "preferNone" - Forces no braces when when the header is one line and body is one line. Otherwise forces braces.
     */
    "ifStatement.useBraces"?: "maintain" | "always" | "preferNone";
    /**
     * If braces should be used or not.
     * @default "maintain"
     * @value "maintain" - Uses braces if they're used. Doesn't use braces if they're not used.
     * @value "always" - Forces the use of braces. Will add them if they aren't used.
     * @value "preferNone" - Forces no braces when when the header is one line and body is one line. Otherwise forces braces.
     */
    "whileStatement.useBraces"?: "maintain" | "always" | "preferNone";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "arrowFunctionExpression.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "classDeclaration.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "classExpression.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "classMethod.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "doWhileStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "enumDeclaration.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "forInStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "forOfStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "forStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "functionDeclaration.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "functionExpression.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "ifStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "interfaceDeclaration.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "moduleDeclaration.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "switchStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "tryStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the brace.
     * @default "nextLineIfHanging"
     * @value "maintain" - Maintains the brace being on the next line or the same line.
     * @value "sameLine" - Forces the brace to be on the same line.
     * @value "nextLine" - Forces the brace to be on the next line.
     * @value "nextLineIfHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the next.
     */
    "whileStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "nextLineIfHanging";
    /**
     * Where to place the next control flow within a control flow statement.
     * @default "nextLine"
     * @value "maintain" - Maintains the next control flow being on the next line or the same line.
     * @value "sameLine" - Forces the next control flow to be on the same line.
     * @value "nextLine" - Forces the next control flow to be on the next line.
     */
    "ifStatement.nextControlFlowPosition"?: "maintain" | "sameLine" | "nextLine";
    /**
     * Where to place the next control flow within a control flow statement.
     * @default "nextLine"
     * @value "maintain" - Maintains the next control flow being on the next line or the same line.
     * @value "sameLine" - Forces the next control flow to be on the same line.
     * @value "nextLine" - Forces the next control flow to be on the next line.
     */
    "tryStatement.nextControlFlowPosition"?: "maintain" | "sameLine" | "nextLine";
    /**
     * If trailing commas should be used.
     * @default "never"
     * @value "never" - Trailing commas should not be used.
     * @value "always" - Trailing commas should always be used.
     * @value "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
     */
    "arrayExpression.trailingCommas"?: "never" | "always" | "onlyMultiLine";
    /**
     * If trailing commas should be used.
     * @default "never"
     * @value "never" - Trailing commas should not be used.
     * @value "always" - Trailing commas should always be used.
     * @value "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
     */
    "arrayPattern.trailingCommas"?: "never" | "always" | "onlyMultiLine";
    /**
     * If trailing commas should be used.
     * @default "never"
     * @value "never" - Trailing commas should not be used.
     * @value "always" - Trailing commas should always be used.
     * @value "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
     */
    "enumDeclaration.trailingCommas"?: "never" | "always" | "onlyMultiLine";
    /**
     * If trailing commas should be used.
     * @default "never"
     * @value "never" - Trailing commas should not be used.
     * @value "always" - Trailing commas should always be used.
     * @value "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
     */
    "objectExpression.trailingCommas"?: "never" | "always" | "onlyMultiLine";
    /**
     * If trailing commas should be used.
     * @default "never"
     * @value "never" - Trailing commas should not be used.
     * @value "always" - Trailing commas should always be used.
     * @value "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
     */
    "tupleType.trailingCommas"?: "never" | "always" | "onlyMultiLine";
}

/** Represents a problem with a configuration. */
export interface ConfigurationDiagnostic {
    /** The property name the problem occurred on. */
    propertyName: string;
    /** The diagnostic's message. */
    message: string;
}

/**
 * Changes the provided configuration to have all its properties resolved to a value.
 * @param config - Configuration to resolve.
 */
export declare function resolveConfiguration(config: Configuration): ResolveConfigurationResult;

/** The result of resolving configuration. */
export interface ResolveConfigurationResult {
    /** The resolved configuration. */
    config: ResolvedConfiguration;
    /** The diagnostics, if any. */
    diagnostics: ConfigurationDiagnostic[];
}

/**
 * Resolved configuration from user specified configuration.
 */
export interface ResolvedConfiguration {
    singleQuotes: boolean;
    newlineKind: "auto" | "\r\n" | "\n";
    "typescript.lineWidth": NonNullable<Configuration["lineWidth"]>;
    "json.lineWidth": NonNullable<Configuration["lineWidth"]>;
    "typescript.indentWidth": NonNullable<Configuration["indentWidth"]>;
    "json.indentWidth": NonNullable<Configuration["indentWidth"]>;
    "typescript.useTabs": NonNullable<Configuration["useTabs"]>;
    "json.useTabs": NonNullable<Configuration["useTabs"]>;
    "enumDeclaration.memberSpacing": NonNullable<Configuration["enumDeclaration.memberSpacing"]>;
    "breakStatement.semiColon": boolean;
    "callSignature.semiColon": boolean;
    "classMethod.semiColon": boolean;
    "classProperty.semiColon": boolean;
    "constructSignature.semiColon": boolean;
    "continueStatement.semiColon": boolean;
    "debuggerStatement.semiColon": boolean;
    "directive.semiColon": boolean;
    "doWhileStatement.semiColon": boolean;
    "exportAssignment.semiColon": boolean;
    "expressionStatement.semiColon": boolean;
    "functionDeclaration.semiColon": boolean;
    "ifStatement.semiColon": boolean;
    "importDeclaration.semiColon": boolean;
    "importEqualsDeclaration.semiColon": boolean;
    "indexSignature.semiColon": boolean;
    "mappedType.semiColon": boolean;
    "methodSignature.semiColon": boolean;
    "moduleDeclaration.semiColon": boolean;
    "namespaceExportDeclaration.semiColon": boolean;
    "propertySignature.semiColon": boolean;
    "returnStatement.semiColon": boolean;
    "throwStatement.semiColon": boolean;
    "typeAlias.semiColon": boolean;
    "variableStatement.semiColon": boolean;
    "forInStatement.useBraces": NonNullable<Configuration["useBraces"]>;
    "forOfStatement.useBraces": NonNullable<Configuration["useBraces"]>;
    "forStatement.useBraces": NonNullable<Configuration["useBraces"]>;
    "ifStatement.useBraces": NonNullable<Configuration["useBraces"]>;
    "whileStatement.useBraces": NonNullable<Configuration["useBraces"]>;
    "arrowFunctionExpression.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "classDeclaration.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "classExpression.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "classMethod.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "doWhileStatement.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "enumDeclaration.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "forInStatement.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "forOfStatement.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "forStatement.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "functionDeclaration.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "functionExpression.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "ifStatement.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "interfaceDeclaration.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "moduleDeclaration.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "switchStatement.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "tryStatement.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "whileStatement.bracePosition": NonNullable<Configuration["bracePosition"]>;
    "ifStatement.nextControlFlowPosition": NonNullable<Configuration["nextControlFlowPosition"]>;
    "tryStatement.nextControlFlowPosition": NonNullable<Configuration["nextControlFlowPosition"]>;
    "arrayExpression.trailingCommas": NonNullable<Configuration["trailingCommas"]>;
    "arrayPattern.trailingCommas": NonNullable<Configuration["trailingCommas"]>;
    "enumDeclaration.trailingCommas": NonNullable<Configuration["trailingCommas"]>;
    "objectExpression.trailingCommas": NonNullable<Configuration["trailingCommas"]>;
    "tupleType.trailingCommas": NonNullable<Configuration["trailingCommas"]>;
}

/**
 * Function used by the cli to format files.
 * @param args - Command line arguments.
 * @param environment - Environment to run the cli in.
 */
export declare function runCli(args: string[], environment: Environment): Promise<void>;

/**
 * An implementation of an environment that interacts with the user's file system and outputs to the console.
 */
export declare class RealEnvironment implements Environment {
    log(text: string): void;
    warn(text: string): void;
    error(text: string): void;
    resolvePath(fileOrDirPath: string): string;
    readFile(filePath: string): Promise<string>;
    writeFile(filePath: string, text: string): Promise<void>;
    glob(patterns: string[]): Promise<string[]>;
}

/** Represents an execution environment. */
export interface Environment {
    log(text: string): void;
    warn(text: string): void;
    error(text: string): void;
    resolvePath(path: string): string;
    readFile(filePath: string): Promise<string>;
    writeFile(filePath: string, text: string): Promise<void>;
    glob(patterns: string[]): Promise<string[]>;
}
