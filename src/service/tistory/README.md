
# [write]

**tistory official example**
```
POST https://www.tistory.com/apis/post/write?
  access_token={access-token}
  &output={output-type}
  &blogName={blog-name}
  &title={title}
  &content={content}
  &visibility={visibility}
  &category={category-id}
  &published={published}
  &slogan={slogan}
  &tag={tag}
  &acceptComment={acceptComment}
  &password={password}
```

**my example**
```
```


# [response]

**tistory official example**
```
{
  "tistory":{
    "status":"200",
    "postId":"74",
    "url":"http://sampleUrl.tistory.com/74"
  }
}
```









*refrence: https://tistory.github.io/document-tistory-apis/apis/v1/post/write.html*