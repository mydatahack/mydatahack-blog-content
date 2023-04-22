In the last post, we built <a href="https://en.wikipedia.org/wiki/AlexNet" target="_blank" rel="noopener noreferrer">AlexNet</a> with <a href="https://keras.io/" target="_blank" rel="noopener noreferrer">Keras</a>. This is the second part of AlexNet building. Let’s rewrite the Keras code from the previous post (see <strong><a href="https://www.mydatahack.com/building-alexnet-with-keras" target="_blank" rel="noopener noreferrer">Building AlexNet with Keras</a></strong>) with <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">TensorFlow</a> and run it in <a href="https://aws.amazon.com/sagemaker/" target="_blank" rel="noopener noreferrer">AWS SageMaker</a> instead of the local machine.

AlexNet is in fact too heavy for a regular commercial laptop to handle it. It only runs on a small dataset and takes for ages. By using the cloud service like AWS, we can access to much better computers without any hardware investment. AWS already has a series of deep learning specialised instances (<a href="https://aws.amazon.com/ec2/instance-types/p2/" target="_blank" rel="noopener noreferrer">P2 Instances</a>). The smallest with one GPU (p2.xlarge) costs 90 cent per hour. It is much faster than CPU machines. You can experiment on computing capacities as you will be charged only by usage hours. If you are thinking about buying a more expensive GPU laptop for deep learning, the cloud services would be a better option.

AWS recently released SageMaker, which enables you to develop and deploy deep learning code with no hustle. To run Tensorflow code in SageMaker, all you need is to create a notebook instance (check out the getting started video <a href="https://www.youtube.com/watch?v=tBRHh_V8vjc" target="_blank" rel="noopener noreferrer">here</a>).

<strong><u>Importing OxfordFlower17 Data</u></strong>

You can creates a notebook instance with a chosen EC2 instance with SageMaker. Once the instance is created, you can access to the instance through Jupyter notebook for development and deployment. Many deep learning frameworks are already installed. Once you train the model, you can deploy it into the AWS environment without much hustle. The caveat is that you won’t be able to install or update the preinstalled packages as you do not have access to the underlining instance. If you need to have special environmental requirements, you need to bring it in with a Docker container.

In fact, SageMaker does not have tflearn installed. As in the <a href="https://www.mydatahack.com/building-alexnet-with-keras" target="_blank" rel="noopener noreferrer">previous post</a>, we are importing <a href="http://www.robots.ox.ac.uk/~vgg/data/flowers/17/" target="_blank" rel="noopener noreferrer">17 category flower dataset</a> (OxfordFlower17) from tflearn. If you try to import it in SageMaker, it will give you the module not found error.

The strategy I took here is to upload the dataset as numpy array files to S3 and retrieve them in SageMaker.

<strong>(1) Create the numpy files and Upload to S3</strong>

I first created npy files and uploaded to S3 bucket where SageMaker has the access policy.

<script src="https://gist.github.com/mydatahack/925998afe1545da1e7b194d4be1d2ebc.js"></script>

<strong>(2) Import numpy files into the SageMaker instance.</strong>

You can get the file from S3 into the Notebook instance and simply load them as numpy objects.

<script src="https://gist.github.com/mydatahack/579b4ee174fbaad90ca34036c97e439b.js"></script>

<strong><u>Code</u></strong>

Strictly speaking, it is slightly different from the original AlexNet. The code is sequential and has no parallel computing components for simplicity. I am doing batch normalisation before every input and doing dropouts in the Dense layer. The network architecture is the same as the <a href="https://www.mydatahack.com/building-alexnet-with-keras" target="_blank" rel="noopener noreferrer">previous post</a>.

With TensorFlow, you really need to be careful about the dimensions. The original dataset is 3-dimentional. After the convolution layers, the dimension is compressed from pooling. So, you need to specify the right dimension (7 x 7 in this case). Otherwise, the code will not run.

In the model, I purposely included the weights and biases with hard-coded values so that it is easy to follow. Apart from the model, the same code used in building Dense Net for Iris works. If you need to understand other part of the codes you should read the previous post (<strong><a href="https://www.mydatahack.com/introduction-to-dense-net-with-tensorflow/" target="_blank" rel="noopener noreferrer">Introduction to Dense Net with TensorFlow</a></strong>).

<script src="https://gist.github.com/mydatahack/375857f7c0a5f352709a256e8264a5cc.js"></script>
