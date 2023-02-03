export function formatDate(d: Date): string {
    let day = '';

    if(Number(d.getDate()) < 10)
    {
      day = '0' + d.getDate();
    }

    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + day
}

export function toBase64(file: File){
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error: any) => reject(error);
    });
}

export function parsearErroresAPI(response: any): string[]{
    const resultado: string[] = [];

    if(response.error){
        if(typeof response.error === 'string'){
            resultado.push(response.error);
        } else {
            const mapaErrores = response.error.errors;
            const entradas = Object.entries(mapaErrores);
            entradas.forEach((arreglo: any[]) => {
                const campo = arreglo[0];
                arreglo[1].forEach((mensajeError: any) => {
                    resultado.push(`${campo}: ${mensajeError}`);
                })
            });
        }
    }

    return resultado;
}