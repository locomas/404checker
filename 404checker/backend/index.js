const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

// Use the CORS middleware
app.use(cors());

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
app.get('/client', (req, res) => {
    res.status(200).send([

      //add list of clients here 
      
        {
          "project_id": 14779923,
          "project_name": "Oxmoor Ford",
          "url": "www.oxmoorflm.com",
          "domain_unicode": "www.oxmoorflm.com",
          "tools": [
            {
              "tool": "siteaudit"
            },
            {
              "tool": "tracking"
            }
          ],
          "owner_id": 11743417,
          "permission": [
            "OWNER"
          ]
        }
        
      ]
           
            
        );
    });


    app.get('/client/:id', (req, res) => {
        const id = req.params.id;
    
        const data = {
            "quality": {
                "value": 42,
                "delta": 0
            },
            "errors": [
                {
                    "id": 1,
                    "count": 4,
                    "delta": 0,
                    "checks": 174
                }
            ],
            "warnings": [
                {
                    "id": 101,
                    "count": 2,
                    "delta": 0,
                    "checks": 127
                }
            ],
            "notices": [
                {
                    "id": 201,
                    "count": 1,
                    "delta": 0,
                    "checks": 127
                }
            ],
            "snapshot_id": "54102d92e4b0f889a040c9c8",
            "pages_crawled": 178,
            "finish_date": 1410346398040
        };
    
        res.status(200).send(data);
    });