import RemovedObjects from './removed-components';
import { BitIds } from '../bit-id';

export default class RemovedLocalObjects extends RemovedObjects {
  modifiedComponents: BitIds;
  constructor(
    removedComponentIds?: BitIds,
    missingComponents?: BitIds,
    modifiedComponents?: BitIds,
    removedDependencies?: BitIds,
    dependentBits?: Object
  ) {
    super({ removedComponentIds, missingComponents, removedDependencies, dependentBits });
    this.modifiedComponents = modifiedComponents;
  }
}
