for file in *.ts; do
    filename="${file%.ts}"  
    echo "\n...... $filename ......\n"
    tsc "$filename"             
    node "$filename.js"     
done