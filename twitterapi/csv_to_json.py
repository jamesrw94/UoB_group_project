import sys
import pandas as pd

# total arguments
n = len(sys.argv)

file_name = sys.argv[1]+" "+sys.argv[2]

target = file_name.replace(".csv",".json")


csv_df =pd.read_csv(file_name)

csv_df.to_json(target.replace(" ", "_"),orient = "records", date_format = "epoch")
