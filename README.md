# PD PhotoApp

Pd PhotoApp is a photo sharing app that allows users to upload, comment on, upvote, and delete photos.



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


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.