import type { Mall } from './lib';

export interface MallListProps {
	malls: Mall[];
	onNext: () => void;
	enableNextButton: boolean;
}
