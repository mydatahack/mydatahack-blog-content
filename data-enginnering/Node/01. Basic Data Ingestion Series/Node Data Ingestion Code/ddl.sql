Create Table usermanaged.trans (
    Id varchar(20)
    ,Name varchar(255)
    ,TransactionId varchar(20)
    ,Transaction_ItemId varchar(20)
    ,Transaction_price integer
    ,Subscriber bool
    ,Payment_Type varchar(100)
    ,Payment_Total integer
    ,Payment_Success bool
    ,Note text
);

Create Table usermanaged.photos (
    albumid integer
    ,id integer
    ,title text
    ,url text
    ,thumnailurl text
)

  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/92c952"
  },

// Define the field
const fields = ['albumId', 'id', 'title', 'url', 'thumbnailUrl']