# PD PhotoApp

Pd PhotoApp is a photo sharing app that allows users to upload, comment on, upvote, and delete photos.

PD PhotoApp was built mobile first using bootstrap to help with design and layout.  It renders well on phones as well as desktops and resizes nicely.  The functionality is fairly straitforward making GET, POST, PUT, and DELETE requests to the back end server.

## Screen Shots
![](images/screenshot1)

![](images/screenshot2)

![](images/screenshot3)

## Code Snippits

```
componentDidMount() {
    axios.get("https://photoappproject3.herokuapp.com/api/images").then(res => {
      this.setState({
        images: res.data
      });
    });
  }

  deleteCard = e => {
    console.log(e.target.getAttribute("picid"));
    let id = e.target.getAttribute("picid");
    axios
      .delete("https://photoappproject3.herokuapp.com/api/images/" + id)
      .then(image => console.log(image))
      .then(() => this.componentDidMount());
  };

  upVoteCard = e => {
    console.log(e.target.getAttribute("picid"));
    let id = e.target.getAttribute("picid");
    let url = "https://photoappproject3.herokuapp.com/api/images/" + id;
    axios
      .put(url)
      .then(image => console.log(image))
      .then(() => {
        this.componentDidMount();
      });
  };

  openCommentModal = e => {
    console.log(e.target.getAttribute("picid"));
    this.setState({
      commentmodal: true,
      id: e.target.getAttribute("picid")
    });
  };
```
## Roadmap
![](images/Project%203%20-%20DDPhotoShare%20(1).png)

## Known Issues
Due to time constraints, dynamic rendering isn't working at this time.  To see changes, the browser needs to refresh.

At this time, the "tags" buttons for categories does not work.  The functionality hasn't been written for it yet.

Comments are also buggy as they don't seem to appear in the Comments form where they should (although it was working in earlier renditions before deploying and on local testing) . 

Images are not able to be stored on Heroku (this was not known prior to our build).  Due to how we choose to upload and store images, it is not compatible with Heroku.  We opted to create an image folder that would house all of our images that were uploaded on the backend, then simply store a path to that image on the database Mongodb.  To continue with this method, we would have to have a hosting platform that also allowed for image storage.

Another Alternative is to convert the images into binary data types known as blobs.  We didn't have time to change the method of our uploads before the project due date.

There are likely other bugs that have yet to be discovered.

## Future Builds
Bugs - Continueing on with this build, the goal would be to get all the above bugs fixed and refactor the code down to a cleaner version of itself.  

Tagging Photos - I think there would also be a better way to introduce the "tags" for tagging photos that allows for users to search for tags or simply type in their own.  

User Accounts - User Accounts was a gold line goal for this project but we weren't able to achieve it.  Adding user accounts with passwords would be a great addition to this project in order to create more accountability for content, which was a concern for safetey and security.  As it currently works, there is no way to govern who adds, comments, deletes or upvotes images, which presents a huge accountability issue.

Unknown - With this type of project, I feel that it could go in serveral different directions such as adding video and text uploads as well.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
