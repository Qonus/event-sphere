
export async function fetchEvents({ id, query }: { id?: string; query?: string } = {}) {
    const url = new URL("http://localhost:3000/api/events");

    // Add query parameters if provided
    if (id) {
        url.searchParams.append("id", id);
    }
    if (query) {
        url.searchParams.append("query", query);
    }

    const response = await fetch(url.toString(), {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.statusText}`);
    }

    return response.json();
}
