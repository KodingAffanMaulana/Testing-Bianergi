export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('id-ID', options).format(new Date(dateString));
};