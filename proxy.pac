var direct = "DIRECT";
var proxy = "SOCKS5 127.0.0.1:9055";
var deny = "PROXY 127.0.0.1:65535";

function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) {
    return direct;
  }
  if (dnsDomainLevels(host) === 1) {
    if (false
        // google
        || dnsDomainIs(host, "appspot.com")
        || dnsDomainIs(host, "blogspot.com")
        || dnsDomainIs(host, "blogger.com")
        || dnsDomainIs(host, "ggpht.com")
        || dnsDomainIs(host, "googlecode.com")
        || dnsDomainIs(host, "google.com")
        || dnsDomainIs(host, "google-analytics.com")
        || dnsDomainIs(host, "googlesyndication.com")
        || dnsDomainIs(host, "googleusercontent.com")
        || dnsDomainIs(host, "googlevideo.com")
        || dnsDomainIs(host, "gstatic.com")
        || dnsDomainIs(host, "youtube.com")
        || dnsDomainIs(host, "youtube-nocookie.com")
        || dnsDomainIs(host, "ytimg.com")
        // facebook
        || dnsDomainIs(host, "facebook.com")
        || dnsDomainIs(host, "fbcdn.net")
        // twitter
        || dnsDomainIs(host, "t.co")
        || dnsDomainIs(host, "tinypic.com")
        || dnsDomainIs(host, "twimg.com")
        || dnsDomainIs(host, "twitter.com")
        // developer
        || dnsDomainIs(host, "bitbucket.org")
        || dnsDomainIs(host, "github.com")
        // public cdn
        || dnsDomainIs(host, "cloudflare.net")
        // blog
        || dnsDomainIs(host, "wordpress.com")
        // other
        || dnsDomainIs(host, "nownews.com")
        || dnsDomainIs(host, "nytimes.com")
        || dnsDomainIs(host, "tutsplus.com")
        //MARK1
       ) {
      return proxy;
    }
  }
  if (false
      // google
      || dnsDomainIs(host, "appspot.com")
      || dnsDomainIs(host, "blogspot.com")
      || dnsDomainIs(host, "blogger.com")
      || dnsDomainIs(host, "ggpht.com")
      || dnsDomainIs(host, "googlecode.com")
      || dnsDomainIs(host, "google.com")
      || dnsDomainIs(host, "google-analytics.com")
      || dnsDomainIs(host, "googlesyndication.com")
      || dnsDomainIs(host, "googleusercontent.com")
      || dnsDomainIs(host, "googlevideo.com")
      || dnsDomainIs(host, "gstatic.com")
      || dnsDomainIs(host, "youtube.com")
      || dnsDomainIs(host, "youtube-nocookie.com")
      || dnsDomainIs(host, "ytimg.com")
      // facebook
      || dnsDomainIs(host, "facebook.com")
      || dnsDomainIs(host, "fbcdn.net")
      // twitter
      || dnsDomainIs(host, "t.co")
      || dnsDomainIs(host, "tinypic.com")
      || dnsDomainIs(host, "twimg.com")
      || dnsDomainIs(host, "twitter.com")
      // developer
      || dnsDomainIs(host, "bitbucket.org")
      || dnsDomainIs(host, "github.com")
      // public cdn
      || dnsDomainIs(host, "cloudflare.net")
      // blog
      || dnsDomainIs(host, "wordpress.com")
      // other
      || dnsDomainIs(host, "nownews.com")
      || dnsDomainIs(host, "nytimes.com")
      || dnsDomainIs(host, "tutsplus.com")
      //MARK2
     ) {
    return proxy;
  }

  return direct;
}
