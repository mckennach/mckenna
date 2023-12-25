import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import type { Session } from '@supabase/supabase-js';

export const sessionAtom = atom<Session | null>(null);