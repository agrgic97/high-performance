export const formatDateTime = (datetime) => {
    const date = new Date(datetime);

    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }

    return date.toLocaleString('de-DE', options);
}