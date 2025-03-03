const QueryCache = require("./query-cache.js");

async function useQuery({queryKey, queryFn}) {
    const cache = new QueryCache();
    let data = cache.getQuery(queryKey);

    data = await queryFn();
    cache.addQuery(queryKey, data);

    return { data }
}

module.exports = { useQuery };
