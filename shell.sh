#!/bin/bash
#echo $1
com=$1
date=$(date)
#echo "started command:"
echo $date Command: $com | sed 's/%20/ /g'
#logging
echo -n $date "" >> command_log.txt
echo $com | cut -c7- | sed 's/%20/ /g' | sed 's/%22/"/g' >> command_log.txt
#execute
echo $com | cut -c7- | sed 's/%20/ /g' | sed 's/%22/"/g' | bash
