export function formatPrice(priceInCents: number){
    const formatedPrice = priceInCents / 100
    return new Intl.NumberFormat('pt-BR', {style: "currency" ,currency: 'BRL'}).format(formatedPrice)
}