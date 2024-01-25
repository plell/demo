type Body = Record<string, any>

const domain = 'http://localhost:3000/api'

export const get = async (url: string) => {
    const res = await fetch(`${domain}/${url}`, {
        method: "GET",
    });
    
    if (!res.ok) throw new Error('Failed to fetch data')
  
    return await res.json();
}

export const post = async (url:string, body:Body) => {
    const res = await fetch(`${domain}/${url}`, {
        method: "POST",
        body: JSON.stringify(body),
    });
    
    if (!res.ok) throw new Error('Failed to fetch data')
  
    return await res.json();
}

export const put = async (url:string, body:Body) => {
    const res = await fetch(`${domain}/${url}`, {
        method: "POST",
        body: JSON.stringify(body),
    });
    
    if (!res.ok) throw new Error('Failed to fetch data')
  
    return await res.json();
}

export const del = async (url:string) => {
    const res = await fetch(`${domain}/${url}`, {
        method: "DELETE",
    });
    
    if (!res.ok) throw new Error('Failed to fetch data')
  
    return await res.json();
}



