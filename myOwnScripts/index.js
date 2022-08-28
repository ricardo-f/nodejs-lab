import AWS from 'aws-sdk';

async function awsGetData() {
  // set the configs
  AWS.config.update({
    region: 'us-east-1'
  });

  // create EC2 service object
  const ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });

  // empty params object, needed to pass into describeSubnets function
  const params = {};

  ec2.describeVpcs(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else
      for (let i = 0; i < data.Vpcs.length; i++) {
        const VpcId = data.Vpcs[i].VpcId
        const vpcCidrBlock = data.Vpcs[i].CidrBlock
        console.log(VpcId, vpcCidrBlock)
      }
  }
  );

  ec2.describeSubnets(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else
      for (let i = 0; i < data.Subnets.length; i++) {
        const SubnetId = data.Subnets[i].SubnetId
        const availIPs = data.Subnets[i].AvailableIpAddressCount
        const CidrBlock = data.Subnets[i].CidrBlock
        const VpcId = data.Subnets[i].VpcId
        console.log(VpcId, SubnetId, CidrBlock, availIPs)
      }
  }
  );
}

awsGetData()
