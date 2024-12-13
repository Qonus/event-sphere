
export async function fetchEvents({ user_id, id, query, }: any = {}) {
    const url = new URL(`${process.env.NEXT_PUBLIC_URL}/api/events`);

    // Add query parameters if provided
    if (id) {
        url.searchParams.append("id", id);
    }
    if (query) {
        url.searchParams.append("query", query);
    }
    if (user_id) {
        url.searchParams.append("user_id", user_id);
    }

    const response = await fetch(url.toString(), {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.statusText}`);
    }

    return response.json();
}
