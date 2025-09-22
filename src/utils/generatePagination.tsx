export const generatePagination = (currentPage: number, totalPages: number) => {
    // si el numero de paginas es 7 o menos
    // mostrar todas las paginas sin puntos suspensivos

    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // si la pagina actual esta entre las primeras 3 paginas 
    // mostrar las primeras 3, puntos susupensivos y las ultimas 2
    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPages - 1, totalPages];
    }
    // si la pagina actual esta entre las 3 ultimas
    // mostrar las primera 2, puntos suspensivos y las ultimas 3
    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }
    // si la pagina actual esta en el medio mostrar la primera pagina, la pagina actual y vecinos

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
}