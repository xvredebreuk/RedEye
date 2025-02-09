/* This is a mk-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import { types, prop, tProp, Model, Ref, idProp } from 'mobx-keystone';
import { QueryBuilder } from 'mk-gql';

/**
 * TagBase
 * auto generated base class for the model TagModel.
 */
export class TagModelBase extends Model({
	__typename: tProp('Tag'),
	commandsCount: prop<number>().withSetter(),
	commentCount: prop<number>().withSetter(),
	id: prop<string>().withSetter(),
	text: prop<string>().withSetter(),
}) {
	getRefId() {
		return String(this.id);
	}
}

export class TagModelSelector extends QueryBuilder {
	get commandsCount() {
		return this.__attr(`commandsCount`);
	}
	get commentCount() {
		return this.__attr(`commentCount`);
	}
	get id() {
		return this.__attr(`id`);
	}
	get text() {
		return this.__attr(`text`);
	}
}
export function selectFromTag() {
	return new TagModelSelector();
}

export const tagModelPrimitives = selectFromTag().commandsCount.commentCount.text;
