const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())

 
const jsonData =  {
    ProductList: [
        {
            "id":1,
            "image":"https://i.ibb.co/KsRDMkD/appsript.jpg",
            "productHeding":"PPXOC Milkyway dress in...",
            "iconimage":""
        },
        {
            "id":2,
            "image":"https://i.ibb.co/PFZ2t72/appscript-Blet.jpg",
            "productHeding":"PPXOC Milkyway dress in...",
            "iconimage":""
        },
        {
            "id":3,
            "image":"https://i.ibb.co/sQDSMJb/appscript-kap.jpg",
            "productHeding":"PPXOC Milkyway dress in..."
        },
        {
            "id":4,
            "image":"https://i.ibb.co/4RryN7P/appscript-bag-2.jpg",
            "productHeding":"PPXOC Milkyway dress in..."
        },
        {
            "id":5,
            "image":"https://i.ibb.co/fSBBRYp/appscript-doll.jpg",
            "productHeding":"PPXOC Milkyway dress in..."
        },
        {
            "id":6,
            "image":"https://i.ibb.co/b62Rt7b/appscript-narrow-bag.jpg",
            "productHeding":"PPXOC Milkyway dress in..."
        },
        {
            "id":7,
            "image":"https://i.ibb.co/Y88SxDp/appscript-black-bag.jpg",
            "productHeding":"PPXOC Milkyway dress in..."
            
        },
        {
            "id":8,
            "image":"https://i.ibb.co/gzNZc3Z/appscript-of-green.jpg",
            "productHeding":"PPXOC Milkyway dress in..." 
        },
        {
            "id":9,
            "image":"https://i.ibb.co/KsyPBwK/appscript-little-bag.jpg",
            "productHeding":"PPXOC Milkyway dress in..." 
        },
        {
            "id":10,
            "image":"https://i.ibb.co/drKwqBJ/appscript-white-bag.jpg",
            "productHeding":"PPXOC Milkyway dress in..." 
        },
        {
            "id":11,
            "image":"https://i.ibb.co/QFWCH6w/appscript-bron-bag.jpg",
            "productHeding":"PPXOC Milkyway dress in..." 
        },
        {
            "id":12,
            "image":"https://i.ibb.co/bR5fR10/appscript-doll2.jpg",
            "productHeding":"PPXOC Milkyway dress in..." 
        }
    ]
}

app.get('/productList', (req, res) => {
  res.json(jsonData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
