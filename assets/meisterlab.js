            function get(url,receiver) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById(receiver).href= this.responseText;
                        return false;
                    }
                };
                xhr.open ("GET" ,url, true);
                xhr.send ();
                return false;
            }
            get("https://raw.githubusercontent.com/meisterlab/meisterlab.github.io/master/assets/current.md","meisterlab");

