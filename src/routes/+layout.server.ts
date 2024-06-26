import { getCamps } from '$lib/api/db';
import { serializeNonPOJOs } from '$lib/utils/utils';

export const load = async ({ locals }) => {
	if (locals.user) {
		return {
			user: serializeNonPOJOs(locals.user)
		};
	}
};
