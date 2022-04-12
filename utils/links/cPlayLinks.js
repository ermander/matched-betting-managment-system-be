const baseUrl = 'https://api.cplay.it/api/Palinsesto/GetManifestazioneCore?v='

const marketIds = {
  'd8643d3a-8080-1094-1810-9fbf97ff48d7': "one",
  '70d0925a-c237-f0f2-1e5e-753b62df80ed': "x",
  'e1ae8fa1-f7ec-74fb-1224-418f7bafb744': "two",
  "31a89678-730c-1e27-435b-8222a6064a2a": "oneX",
  "dbb1b113-0ed5-a53c-1a4b-1ced1e3e3251": "xTwo",
  "67cfbf78-cf79-e051-2680-87e49666c6e0": "oneTwo",
  'edca0549-8d2a-47bc-a0cf-c83796df6fbe': "under2_5",
  'fb0e9c76-5298-44dd-bf9d-a7337b2b0bf5': "over2_5",
  '0aa8aed7-f434-d65e-8c43-f256f34e7f86': "goal",
  'a6d6e835-ee26-c427-ba05-c4ac812b0b86': "noGoal"
}

const links = [
  // Champions League
  'c467243fbcc9a1b1b8a04a64262d16448d97dd60e69024e130e96f3b1077bb4c',
  // Europa League
  '193712e80add00c2350832a1ae893d9ec315af01a2e357796d5dacabb5a0f506',
  // Serie A Italia
  '5d6fa67535e382d78499bcf025a3f2f21e5f7296757348c1899e02bd48f78a79',
  // Serie B
  'd3d5b163c36e4eabceb7c58ec7d477e9443ffcc86344329db7ae996e3bf4b58e',
  // Premiere Ligue UK
  '7797f64a7e01e68f7f95982da488d8bb182d229b27d1cd92f1dad052b5cbb7f0',
  // Championship UK
  'aadc0f7308a599646e2388f25419b0a5d374fa947d9edf1a2f07acebb63ea499',
  // League One UK
  'c35fd2fee03aaecb0a2f06ec14420475485ebf07db074b80559b6c9dbbb89d93',
  // League Two
  '1d0c595897f56ec74b1dcea3ad65c6caa55f73a54595408ebcbc90f481c6db03',
  // La Liga Spagna
  '4b3411263b02c39ed87d6cf3b72fc3e814ec32846a4d39eb9f07008b77b2d873',
  // La Liga 2 Spagna
  '9b871052a6824c3c596b5e7a0ff178c63c9e698a92587a387e1e02913972c2bc',
  // Bundesliga
  '0c1894e963aa3b0779817cd4c80b9b80a825e9ae54c024bbec252dfa6025ac49',
  // Bundeliga 2
  'bfd7a460007d0d6d7f96743506dcd70e3a43baea907d26d42424177c996ae63c',
  // Ligue 1 Francia
  '222a82691b9a449677ab35691572069f2e5b8ce524a8c3f041e99530c7727964',
  // Ligue 2 Francia
  '5e54180fe89bf8f2f99d6cd88a1c66caccac8c694a39669b5a025ac4ced6bac8',
  // Eredivisie Olanda
  'f24eef8c2de6bd1161b214034d1737d0ddcc4503f6b0f718afc7d7e00037364f',
  // Eerste divisie Olanda
  '27446e5e30bffec6e89a64e23f6022b69b434787436afb720d786d0087abedd9',
  // Primera Liga Portogallo
  'dcc23d17395d652ac83cc906f6bb27e8aa376d63062f2b22eebecd878aad58ac',
  // Segunda Liga Portogallo
  'ab06a01b41975c842be404bb4ef3b00f31acc4b410179ae07b0470212bb25518',
  // Primera Nacional Argentina
  'c5d4d4c13ed8404538db17f04c64c0081e12f43f37f0b3f8f1a8710440c67c8e',
  // Pro League Belgio
  '5ff093817b6977803ece5423e642f075a37d35702552990df5a62c3f17b9bb92',
  // Primera A Colombia
  '0971133aee4c110edf9b992983a7bb0afd85a477a86f6e935c814646a92dc590'
]

module.exports = { baseUrl, marketIds, links }
