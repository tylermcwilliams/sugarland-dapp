import Moralis from 'moralis';

Moralis.initialize("W76QeJV4EjJbWe5Vqu20Htbq3L8G4p115iVV9CVt");
Moralis.serverURL = 'https://tq2salefdmvz.usemoralis.com:2053/server'

export default ({ app }, inject) => {

inject('moralis', Moralis)

}