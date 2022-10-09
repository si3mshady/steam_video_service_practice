
provider "aws" {
  region = "us-east-1"
}



resource "aws_instance" "stream-server" {
  ami           = "ami-07e71eeb30844584a"
  instance_type = "t2.medium"
  associate_public_ip_address = true
  
  vpc_security_group_ids = ["sg-0151e4a2d2547a2fa"]
  subnet_id = "subnet-0a11213603ca775d9"
  key_name =  "shawshank_redemption"
  tags = {
    Nombre = "streamServer"
    Name = "streamShady-v3"
    Alias = "si3mshady"
  }

   user_data = <<-STREAM
    #!/bin/bash
    docker run -p 8888:888  si3mshady/stream:v2
    STREAM
}

output "connection_url" {

    value = "http://${ aws_instance.stream-server.public_ip}:8888/videos"
  
}
