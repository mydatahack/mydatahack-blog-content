@ECHO off
setlocal enabledelayedexpansion
set "dir1=%1
FOR /R %dir1% %%X in (*.dsx) DO (
C:\IBM\InformationServer11.3\ASBNode\bin\DSXImportService  -ISAuthFile TstAuthFile.txt -DSProject OUAODS_TST -DSXFile %%X -Overwrite -Verbose
echo %%X
)


