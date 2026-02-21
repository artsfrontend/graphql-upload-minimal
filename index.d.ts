import { IncomingMessage, ServerResponse } from "http";
import { GraphQLScalarType } from "graphql";
import { ReadStream } from "fs";

import { RequestHandler } from "express";

export interface UploadOptions {
  maxFieldSize?: number | undefined;
  maxFileSize?: number | undefined;
  maxFiles?: number | undefined;
  environment?: "lambda" | "gcf" | "azure";
}

export interface GraphQLOperation {
  query: string;
  operationName?: null | string | undefined;
  variables?: null | unknown | undefined;
}

export function processRequest(
  request: IncomingMessage,
  response: ServerResponse,
  uploadOptions?: UploadOptions
): Promise<GraphQLOperation | GraphQLOperation[]>;

export const GraphQLUpload: GraphQLScalarType;

export interface FileUpload {
  filename: string;
  fieldName: string;
  mimetype: string;
  encoding: string;
  createReadStream(path?: string): ReadStream;
  ignoreStream(): Function;
}

export class Upload {
  promise: Promise<FileUpload>;
  file?: FileUpload;
}

export function graphqlUploadExpress(
  uploadOptions?: UploadOptions
): RequestHandler;
