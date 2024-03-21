import { format } from 'date-fns/format';

export const formatDate = (date: Date): string =>
  format(date, 'dd MMMMMMM yyyy');
