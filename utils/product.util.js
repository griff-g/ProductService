

export const generateProductSlug =(productName)=> {
    // Convert product name to lowercase and replace spaces with dashes
    let slug = productName.toLowerCase().replace(/ /g, '-');
  
    // Remove special characters and non-alphanumeric characters
    slug = slug.replace(/[^a-zA-Z0-9-]/g, '');
  
    // Remove multiple dashes and leading/trailing dashes
    slug = slug.replace(/-+/g, '-').replace(/^-|-$/g, '');
  
    return slug;
  }