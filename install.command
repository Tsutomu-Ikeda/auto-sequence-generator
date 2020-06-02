#! /bin/bash
defaults write com.adobe.CSXS.9 PlayerDebugMode 1

cd "`dirname "$0"`"
sudo mkdir -p /Library/Application\ Support/Adobe/CEP/extensions/ASG
sudo cp -r ./src/ /Library/Application\ Support/Adobe/CEP/extensions/ASG
